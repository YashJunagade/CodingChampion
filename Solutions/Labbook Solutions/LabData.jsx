import { CProgramming } from './labSub/0';
import { DBMS } from './labSub/1';
import { WebTechnology } from './labSub/2';
import { RDBMS } from './labSub/3';
import { DataStructure } from './labSub/4';
import { BigData } from './labSub/5';
import { Php } from './labSub/6';
import { AngularJs } from './labSub/7';
import { Cpp } from './labSub/8';
import { AdvancePhp } from './labSub/9';
import { NodeJs } from './labSub/10';
import { CoreJava } from './labSub/11';
import { Python } from './labSub/12';
import { MongoDB } from './labSub/13';
import { AdvanceJava } from './labSub/14';
import { AndroidProgramming } from './labSub/15';
import { DotNetFramework } from './labSub/16';

export const labData = [
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
];

import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../src/config/firebase';

const storeLabData = async () => {
  const subjectsCollection = collection(db, 'labSubjects');

  for (const subject of labData) {
    const subjectDoc = doc(subjectsCollection, subject.subject);
    await setDoc(subjectDoc, {
      subject: subject.subject,
      assignments: subject.assignments,
      language: subject.language,
    });
  }
};

// console.log('Starting data upload...');
// storeLabData().then(() => console.log('Data upload complete'));
