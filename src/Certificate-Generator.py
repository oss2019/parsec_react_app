# Importing modules
import csv
import pymongo
import pandas as pd

# Opening spearsheet
read_file = pd.read_excel("Spreadsheet_FIle.xlsx")
read_file.to_csv("Spreadsheet_FIle.csv",
                  index=None,
                  header=True)
df = pd.read_excel("Spreadsheet_FIle.xlsx")

# Establishing mongoDB connection
connection = pymongo.MongoClient('MongoDB URL')
# Change the database from test to the name you need
db = connection.test
# Change the table from table1 to the name you need
collection = db.table1

# Reading data
table = open('Spreadsheet_FIle.csv', 'r')
reader = csv.DictReader(table)
header = df.head()

# Pushing to MongoDB
for each in reader:
    row = {}
    for field in header:
        row[field] = each[field]
    collection.insert_one(row)
