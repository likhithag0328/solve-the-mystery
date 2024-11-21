function isPlayerReady(question) {
  const response = confirm(question);
  return response;
}

function getUserInput(question) {
  const response = prompt(question);
  const isCorrect = confirm('\nYou entered: '+response+'\nIs that correct?');
  return isCorrect ? response : getUserInput(question);
}

function findCauseOfDeath() {
  console.log('---------------------------------------------------------');
  console.log("\nYou learn that the cause of death for every victim is common and it is because of suffocation. You have nothing to do with this. You can't move forward.");
  console.log('\n-------END OF GAME-------\n');
  console.log('\nYOU SCORED 0%\n');
  let score = 0;
  printScores(name, score);
}

function trackFootPrint() {
  console.log('---------------------------------------------------------');
  console.log("\nThe footprint leads you to a secluded area where the killer might be hiding. You find the killer");
  console.log('\n-------YOU FOUND THE MURDERER-------\n');
  console.log('\n-------YOU WON THE GAME-------\n');
  console.log('\nYOU SCORED 100%\n');
  let score = 100;
  printScores(name, score);
}

function compareWithKnownSuspects() {
  console.log('---------------------------------------------------------');
  console.log("\nYou find a match with a suspect who has a history of similar crimes.");
  console.log('\n-------THE POLICE ARE TRYING TO FIND THE SUSPECT-------\n');
  console.log('\n-------END OF GAME-------\n');
  console.log('\nYOU SCORED 75%\n');
  let score = 75;
  printScores(name, score);
}

function followUpForensicLead() {
  console.log('---------------------------------------------------------');
  console.log("\nYou discover that the killer left behind a unique footprint, which can help find them.");
  console.log("\n1]Track the footprint\n2]Compare with known suspects");
  const userInput = +getUserInput('\nChoose an option:');

  if (userInput === 1) {
    trackFootPrint();
    return;
  }

  compareWithKnownSuspects();
}

function talkToForensic() {
  console.log('---------------------------------------------------------');
  console.log('\nThey inform you about the cause of death and any unusual evidence found at the scene.');
  console.log("\n1]Find cause of death\n2]Follow up the forensic's team lead");
  const userInput = +getUserInput('\nChoose an option:');

  if (userInput === 1) {
    findCauseOfDeath();
    return;
  }

  followUpForensicLead();
}

function getDetailedDescription() {
  console.log('---------------------------------------------------------');
  console.log('\nThe witness provides a description that matches a known suspect with a criminal record.');
  console.log('\n-------THE POLICE ARE TRYING TO FIND THE SUSPECT-------\n');
  console.log('\n-------END OF GAME-------\n');
  console.log('\nYOU SCORED 75%\n');
  let score = 75;
  printScores(name, score);
}

function lookForCameras() {
  console.log('---------------------------------------------------------');
  console.log("\nYou find footage that shows the suspect's vehicle, giving you a crucial lead. But the adress in the records corresponding to the car is not a valid address. You can't move forward.\n");
  console.log('\n-------END OF GAME-------\n');
  console.log("YOU SCORED 0%");
  let score = 0;
  printScores(name, score);
}

function searchTheArea() {
  console.log('---------------------------------------------------------');
  console.log('\nYou find a neighbour who saw a shadowy figure leaving the scene just after midnight.');
  console.log('\n1]Get a detailed description from the witness\n2]Look for security cameras in the area');
  const userInput = +getUserInput('\nChoose an option:');

  if (userInput === 1) {
    getDetailedDescription();
    return;
  }

  lookForCameras();
}

function visitCrimeScene() {
  console.log('---------------------------------------------------------');
  console.log('\nYou arrive at the scene, a quiet residential area. The area is isolated and you see forensic teams at work.');
  console.log('\n1]Talk to the forensic team\n2]Search the area for the evidences');
  const userInput = +getUserInput('\nChoose an option:');

  if (userInput === 1) {
    talkToForensic();
    return;
  }

  searchTheArea();
}

function investigateAboutOrganization() {
  console.log('---------------------------------------------------------');
  console.log("\nYou discovered that the founder of the organization disappeared 10 years earlier. you find that a group of people published a report about the illegal activities happening in the organization.");

  console.log("\n-------THE POLICE ARE TRYING TO FIND THE FOUNDER OF THE ORGANIZATION-------\n");
  console.log("YOU SCORED 65%");
  let score = 65;
  printScores(name, score);
}

function researchAboutSymbol() {
  console.log('---------------------------------------------------------');
  console.log("\nYou find that the symbol is linked to an organization that did illegal activities.");
  console.log('\n1]Investigate about the organization\n2]Go back');
  const userInput = +getUserInput('\nChoose an option:');
  
  if (userInput === 1) {
    investigateAboutOrganization();
    return;
  }

  findCluesFromPhotos();
}

function askPeopleAboutSymbol() {
  console.log('---------------------------------------------------------');
  console.log("\nYou learn that the symbol is associated with an organization that do illegal activities like providing fake certificates. But no one knows clearly. You can't move forward.");
  console.log("\n-------END OF GAME-------\n");
  console.log("YOU SCORED 25%");
  let score = 25;
  printScores(name, score);
}

function findCluesFromPhotos () {
  console.log('---------------------------------------------------------');
  console.log("\nYou notice a strange symbol left at each crime scene, which might be a killer's identity.");
  console.log('\n1]Research about the symbol\n2]Ask people of the village about the symbol');
  const userInput = +getUserInput('\nChoose an option:');
  
  if (userInput === 1) {
    researchAboutSymbol();
    return;
  }

  askPeopleAboutSymbol();

}

function followUpOnMotive() {
  console.log('---------------------------------------------------------');
  console.log('\nYou learn that they were working on a similar case together around 2014 as their collegues mentioned. But no one knows the area they were working.');


  if (confirm("Do you want to look for other connections?")) {
    lookForOtherConnections();
  }
  return;

}

function InvestigateOrganizationActivities() {
  console.log('---------------------------------------------------------');
  console.log('\nYou discover that the organization was involved in illegal ativities like providing fake certificates.');
}

function findFormerMembers() {
  console.log('---------------------------------------------------------');
  console.log('\nA former board member provides a lead on a hidden location where the club used to meet.');
}

function lookForOtherConnections() {
  console.log('---------------------------------------------------------');
  console.log('\nYou learn that the victims were working on the illegal activities of the organization.');
  console.log("\n1]Investigste the organization activities\n2]Find former board members");
  const userInput = +getUserInput('\nChoose an option:');

  if (userInput === 1) {
    InvestigateOrganizationActivities();
  }

  findFormerMembers();
}

function investigateCollegues() {
  console.log('---------------------------------------------------------');
  console.log('\nYou gather information that points to a possible motive related to a past event.');
  console.log('\n1]Follow up on the motive\n2]Look for other connections');
  const userInput = +getUserInput('\nChoose an option:');

  userInput === 1 ? followUpOnMotive() : lookForOtherConnections();

  if (confirm("Do you want to visit latest crime scene?")) {
    visitCrimeScene();
    return;
  }

  console.log("you can't go forward.");
  console.log("\n-------END OF GAME-------\n");
  console.log("YOU SCORED 45%");
  let score = 45;
  printScores(name, score);
}

function focusOnConnections() {
  console.log('---------------------------------------------------------');
  console.log('\nYou discover that all the victims were from the medical background');
  console.log('\n1]Interview their collegues\n2]Go back');
  const userInput = +getUserInput('\nChoose an option:');

  if (userInput === 1) {
    investigateCollegues();
    return;
  }

  reviewCaseFiles();
}

function reviewCaseFiles() {
  console.log('---------------------------------------------------------');
  console.log('\nYou are reviewing the details of each case. There are also some crime scene photos.');
  console.log('\n1]Find clues from the crime scene photos\n2]Focus on the connection between victims');
  const userInput = +getUserInput('\nChoose an option:');

  if (userInput === 1) {
    findCluesFromPhotos();
    return;
  }

  focusOnConnections();
}

function startGame() {
  console.log('---------------------------------------------------------');
  console.log('\nYou arrive in Kilton and go to the police station to meet Inspector Max Hastings, who explains you the case.');
  console.log('\n1]Review the case files\n2]Visit the latest crime scene');
  const userInput = +getUserInput('\nChoose an option:');

  if (userInput === 1) {
    reviewCaseFiles();
    return;
  }

  visitCrimeScene();
}
const name = getUserInput('What is your name?');

function midnight() {

  console.log('---------------------------------------------------------');
  
  console.log("\n-THE MIDNIGHT MURDERS-\n\nHello " + name + "!!! You are a famous detective, known for your sharp mind and solving many mysteries. You have been called to a small town named Kilton, where a series of murders have been occurring in the midnight. The people of the town are terrified and it is up to you to catch the killer before the next murder.\n");

  console.log('---------------------------------------------------------');

  const userInput = isPlayerReady('Are you ready?');
  if (!userInput) {
    if (confirm('Do you want to quit?')) {
      return;
    }
    
    midnight();
  }
  startGame();
}



//----------------------------------------------------------------------------




function choice1() {
  console.log('---------------------------------------------------------');
  console.log('\nYou stand at the entrance of the forest. The trees are tall and dense.');
  console.log('\n1]Enter the forest\n2]Turn back and leave');
  const userInput = +getUserInput('\nSelect a path:');

  if (userInput === 2) {
    emlwood();
  }

  choice2();
  return;
}

function choice2() {
  console.log('---------------------------------------------------------');
  console.log('\nDo you want to go through dense forest or along the path?\n\n1]Dense forest\n2]Along the path\n');
  let userInput = +getUserInput('Select a path:');

  if (userInput === 1) {
    console.log('---------------------------------------------------------');
    console.log('You enter dark and fell in a big pit. Sorry... YOU LOST THE CORRECT PATH!!!');

    userInput = isPlayerReady('\nDo you want to play again?');
    if(!userInput) {
      return;
    }

    emlwood();
  }

  choice3();
  return;
}

function choice3() {
  console.log('---------------------------------------------------------');
  console.log('\nWhile you are walking, you see a lake. You went near the lake. You heard a strange sound behind the bushes.\n\nSelect one of the two options.\n\n1]Run away\n2]Hide behind the big old tree\n');

  let userInput = +getUserInput('Select an option:');

  if (userInput === 1) {
    console.log('---------------------------------------------------------');
    console.log('There is monster behind the bushes. It chased you and killed. Sorry... YOU LOST THE CORRECT PATH!!!');

    userInput = isPlayerReady('\nDo you want to play again?');
    if(!userInput) {
      return;
    }

    emlwood();
  }

  choice4();
}

function choice4() {
  console.log('You saw a thing shining near the lake. What do you do?\n\n1]Go and see\n2]Stay Hidden\n');

  const userInput = +getUserInput('Select an option:');
  if (userInput === 2) {
    return;
  }

  choice5();
}

function choice5() {
  console.log('A big wild creature approached you from the bushes. What do you do?');

  let userInput = +getUserInput('1]Distract it\n2]Run away');

  if (userInput === 2) {
    console.log('---------------------------------------------------------');
    console.log('It chased you and killed. Sorry... YOU LOST THE CORRECT PATH!!!');

    userInput = isPlayerReady('\nDo you want to play again?');
    if(!userInput) {
      return;
    }

    emlwood();
  }

  choice6();
}

function choice6() {
  console.log('You go near the lake and find a key. What do you do?\n\n1]Take it\n2]Leave it\n');

  const userInput = +getUserInput('Select an option:');
  if (userInput === 2) {
    return;
  }

  choice7();
}

function choice7() {
  
}

function emlwood() {
  console.log('---------------------------------------------------------');
  console.log("\n-AN ELMWOOD TRAIL-\n\nHello " + name + "!!! You've heard rumors about a hidden treasure in the Elmwood forest. You are in the forest right now. Make multiple decisions to go in the correct path and find the vault!\n");

  console.log('---------------------------------------------------------');

  let userInput = isPlayerReady('Are you ready?');
  if (!userInput) {
    if (confirm('Do you want to quit?')) {
      return;
    }
    
    emlwood();
  }
  choice1();
  return;
}

//---------------------------------------------------------------------


function playGame() {

  console.log('---------------------------------------------------------');
  console.log('\n1]THE MIDNIGHT MURDERS\n2]AN ELMWOOD TRAIL\n');
  const userInput = +getUserInput('Select one of the two games:');
  if (userInput === 1) {
    midnight();
    return;
  }
  emlwood();
}


function printScores(name, score) {
  console.log('\n\n|Ram        | 65% |');
  console.log('|Siddique   | 75%  |');
  console.log('|Charan     | 75%|100%|');
  console.log('|Pragna     | 100% |');
  console.log('|Likhita D  | 65%  |');
  console.log('|Akash      | 0%   |');
  console.log('|Abu        | 65%  |');
  console.log('|Anagh      | 25%  |');
  console.log('|Shubha     | 25%  |');
  console.log('|Hima Sai   | 25%  |');
  console.log('|Sameera    | 65%  |');
  console.log('|Malleswari | 25%  |');
  console.log('|Akash Dey  | 0%   |');
  console.log('|Sushanth   | 0%|100% |'); 
  console.log('|Avani      | 25%  |');
  console.log('|Gour       | 65%  |');
  console.log('|Priyankush | 0%|25%  |');
  console.log('|Siddhardha | 100% |');
  console.log('|Karthikeya | 65%  |');
  console.log('|Rohini     | 25%|100%|');
  console.log('|Pradeep    | 0%   |');
  console.log('|' + name + '|' + score + '%|');
}

playGame();
