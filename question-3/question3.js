const fs = require("fs");
//////////to Create Log files///////////
const createLogsDirectory = () => {
  const targetdir = "./logs";
  if (!fs.existsSync(targetdir)) 
    {
      fs.mkdirSync(targetdir);
    }



  process.chdir(targetdir);
  for (let x = 0; x < 10; x++) 
  {
    fs.writeFile(`log${x}.txt`, `This is the log file number ${x}`, (err) => err ? console.error(`Error in file 'log${x}.txt'`) : console.log(`log${x}.txt`));
  }
};



/////////Remove Log files//////////////
const removeLogsDirectory = () => {
  const targetdir = "./logs";
  if (fs.existsSync(targetdir)) 
  {
    process.chdir(targetdir);
    fs.readdir(process.cwd(), (err, files) => {
      files.forEach((file) => {
        fs.unlink(file, (err) => err ? console.error(`Error in file '${file}'`) : console.log(`delete files...${file}`) );
      });
    });
  }
};





createLogsDirectory();
//removeLogsDirectory();