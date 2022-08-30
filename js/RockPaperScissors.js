const getUserChoice = userInput => {  //用const来创建玩家可使用的函数
    userInput = userInput.toLowerCase(); //利用 JavaScript 的toLowerCase()函数将userInput全部小写。
  if (userInput === 'rock' || userInput ==='paper' ||
  userInput === 'scissors') { //确保用户只能输入 剪刀石头布
    return userInput;
  } else {
    console.log('Error!');//不然会error
   } 
  
  }
  const getComputerChoice = () => { //创建一个让计算机做出选择的函数
  const randomNumber = Math.floor(Math.random() * 3); //在其块内，利用Math.random()和Math.floor()获得 0 到 2 之间的整数。
  switch (randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  
   }
  }; 
  console.log(getComputerChoice()); 
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  } 
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    } 
  }
  
  };
  
  console.log(determineWinner('paper', 'scissors'));
  console.log(determineWinner('paper', 'paper'));
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
     const computerChoice = getComputerChoice();
      console.log('You threw: ' + userChoice);
      // console.log('You threw ${userChoice}');
    console.log('The computer threw:' + computerChoice);
  
    console.log(determineWinner(userChoice,computerChoice));
  };
  playGame();
  
  
  
  
  
  
  