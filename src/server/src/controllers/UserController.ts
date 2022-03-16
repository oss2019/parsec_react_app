/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express';
import readXlsxFile from 'read-excel-file/node';
import * as fs from 'fs';

import { getEnvironmentVariables } from '../environments/env';
import UserDetail from '../models/User/UserAuthDetails';
export class UserController {
  static async getData(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query;
      const user = await UserDetail.findOne(query);
      var results: any[] = [];
      const sheets = [
        'DevHack 3.0 Paticipants',
        'DevHack 3.0 Winners',
        'AlgoStrike 2.0 Participants',
        'AlgoStrike 2.0 Winners',
        'Venividivici 2.0 Participants',
        'Venividivici 2.0 Winners',
        'TechnoQuiz Participants',
        'TechnoQuiz Winners',
        'Designo Participants',
        'Designo Winners',
        'Ascensus Participants',
        'Ascensus Winners',
        'GuardAIns Participants',
        'GuardAIns Winners'
      ];
      // int current = 0;
      var ParticipantData: any = {};
      var VerificationData: any = {};
      for(const sheet of sheets) {
        const index = sheets.indexOf(sheet);
        readXlsxFile(`${__dirname}/PARSEC_Contestants.xlsx`, { sheet }).then((data) => {
          // console.log(data);
          var emailIndex = -1;
          var urlIndex = -1;
          var idIndex = -1;
          data[0].forEach((cell, index) => {
            if(cell === 'Merged Doc URL') {
              urlIndex = index;
            }
            if(cell === 'Email') {
              emailIndex = index;
            }
            if(cell === 'ID') {
              idIndex = index;
            }
          })
          for(const row of data) {
            const rowIndex = data.indexOf(row);
            if(rowIndex !== 0) {
              if(!ParticipantData[row[emailIndex] as string]) {
                ParticipantData[row[emailIndex] as string] = [ row[urlIndex] as string ];
              } else {
                console.log('check');
                ParticipantData[row[emailIndex] as string] = [ ...ParticipantData[row[emailIndex] as string], row[urlIndex] ];
              }
              VerificationData[row[idIndex] as string] = row[urlIndex] as string;
            }
          }
          fs.writeFile (`../ParticipantData.json`, JSON.stringify(ParticipantData), function(err) {
              if (err) throw err;
              console.log('ParticipantData Completed');
              }
          );
          fs.writeFile (`../VerificationData.json`, JSON.stringify(VerificationData), function(err) {
              if (err) throw err;
              console.log('VerificationData Completed');
              }
          );
          if(index === sheets.length -1) {
            // console.log(results);
            return res.status(200).json({
              data: results,
              success: true
            });
          }
        });
      }
      // sheets.forEach((sheet, index) => {
      //   readXlsxFile(`${__dirname}/PARSEC_Contestants.xlsx`, { sheet }).then((data) => {
      //     // console.log(data);
      //     var emailIndex = -1;
      //     var urlIndex = -1;
      //     data[0].forEach((cell, index) => {
      //       if(cell === 'Merged Doc URL') {
      //         urlIndex = index;
      //       }
      //       if(cell === 'Email') {
      //         emailIndex = index;
      //       }
      //     })
      //     for(const row of data) {
      //       const index = data.indexOf(row);
      //       if(index !== 0) {
      //         if(row[emailIndex] === query.email) {
      //           console.log(row[urlIndex]);
      //           // results.push(row[urlIndex]);
      //         }
      //       }
      //     }
      //   });
      // })
      // console.log(results);
      // return res.status(200).json({
      //   data: results,
      //   success: true
      // });
    } catch (err) {
      next(err);
    }
  }
}
