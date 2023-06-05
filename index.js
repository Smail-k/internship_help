const { exec } = require('child_process');

function executerScriptPerl(scriptPath) {
  return new Promise((resolve, reject) => {
    exec(`perl ${scriptPath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erreur lors de l'exécution du script Perl : ${stderr}`);
        reject(error);
      } else {
        try {
          const contenuJSON = JSON.parse(stdout);
          // Utilisez le contenu JSON comme souhaité
          // Par exemple, imprimez le contenu
          console.log(contenuJSON);
          resolve(contenuJSON);
        } catch (e) {
          console.error(`Erreur lors de l'analyse du contenu JSON : ${e}`);
          reject(e);
        }
      }
    });
  });
}


executerScriptPerl('./script.pl')
  .then(contenuJSON => {
    console.log(contenuJSON)
  })
  .catch(erreur => {
    
  });