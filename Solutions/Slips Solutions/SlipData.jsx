import { CProgramming } from "./slipSub/0"
import { DBMS } from "./slipSub/1"
import { WebTechnology } from "./slipSub/2"
import { RDBMS } from "./slipSub/3"
import { DataStructure } from "./slipSub/4"
import { BigData } from "./slipSub/5"
import { Php } from "./slipSub/6"
import { AngularJs } from "./slipSub/7"
import { Cpp } from "./slipSub/8"
import { AdvancePhp } from "./slipSub/9"
import { NodeJs } from "./slipSub/10"
import { CoreJava } from "./slipSub/11"
import { Python } from "./slipSub/12"
import { MongoDB } from "./slipSub/13"
import { AdvanceJava } from "./slipSub/14"
import { AndroidProgramming } from "./slipSub/15"
import { DotNetFramework } from "./slipSub/16"

export const SlipData = [
  CProgramming,
  DBMS,
  WebTechnology,
  RDBMS,
  DataStructure,
  BigData,
  Php,
  AngularJs,
  Cpp,
  AdvancePhp,
  NodeJs,
  CoreJava,
  Python,
  MongoDB,
  AdvanceJava,
  AndroidProgramming,
  DotNetFramework,
]

/* 0-c, 1-dbms, 2-web tech, 3-rdbms 4-data structure, 5-bigdata, 6-php, 7-angular js, 8-cpp, 9-advance php, 10-nodejs, 11-corejava, 12-python, 13-mongodb, 14-advance java, 15-android programming, 16-dotnot framework   */

import { collection, doc, setDoc } from "firebase/firestore"
import { db } from "../../src/config/firebase"

export async function uploadSlipData() {
  const subjectsCollection = collection(db, "slipSubjects")

  for (const subject of SlipData) {
    const subjectDoc = doc(subjectsCollection, subject.subject)
    await setDoc(subjectDoc, {
      subject: subject.subject,
      slips: subject.slips,
      language: subject.language,
    })
  }

  console.log("Data uploaded successfully")
}
