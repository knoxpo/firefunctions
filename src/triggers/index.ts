/* 
* FILE NAME: index.ts
* FILE PATH: './triggers/'
* AUTHOR: NAYAN HATHIWALA
* CREATED ON: 10/8/2017
* DESCRIPTION: BASE API.
*/

/* 
* IMPORT LIBRARY HERE
*/
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const trigger = functions.https.onRequest(async (req, res) => {
  res.send('303, snapshot.ref')
})