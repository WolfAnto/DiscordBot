## Discord-Bot-Template
Un projet bot Discord en discord.js v13 qui répond au pire jeu de mot que l'on déteste tous !
![tumblr_phzaikqNzQ1tk76qio1_500](https://user-images.githubusercontent.com/73076854/226985968-60f6b50a-d472-47f6-8e49-84b377dbbb01.gif)

## Démonstration
https://user-images.githubusercontent.com/73076854/226990330-647f1ecc-e100-44a0-8929-b22aa7c6195e.mp4

# Comment l'utiliser ?

## 1. Installer Node.JS
Sous Windows, c'est aussi simple que d'installer n'importe quel autre programme. Téléchargez la dernière version depuis le site web de Node.js, ouvrez le fichier téléchargé et suivez les étapes du programme d'installation. (https://nodejs.org/)

Sur macOS :
Télécharger la dernière version depuis le site web de Node.js, ouvrir le programme d'installation et suivre les instructions.
Utiliser un gestionnaire de paquets comme Homebrew avec la commande brew install node. (https://brew.sh/)
Sous Linux, vous pouvez consulter cette page pour déterminer comment installer Node. https://nodejs.org/en/download/package-manager/

## 2. Installation de discord.js
Maintenant que vous avez installé Node.js et que vous savez comment ouvrir votre console et lancer des commandes, vous pouvez enfin installer discord.js ! Exécutez la commande suivante dans votre terminal :
```bash
npm install discord.js
```
Et le tour est joué ! Avec tous les éléments nécessaires installés, vous êtes presque prêt à commencer à utiliser votre bot.

## 3. Création du Bot Discord
Maintenant que vous avez installé Node, discord.js, vous êtes presque prêt à utiliser le bot ! La prochaine étape consiste à mettre en place une application Discord bot via le site web de Discord.

Il est facile d'en créer un. Les étapes à suivre sont les suivantes :

Ouvrez le portail de développement Discord et connectez-vous à votre compte.
Cliquez sur le bouton "Nouvelle application".
Entrez un nom et confirmez la fenêtre pop-up en cliquant sur le bouton "Créer".
Vous devriez voir une page comme celle-ci :
![image](https://user-images.githubusercontent.com/73076854/226984675-ebdf7317-5b56-4769-ab9a-e51749b28511.png)

Vous pouvez modifier le nom, la description et l'avatar de votre application ici. Une fois que vous avez sauvegardé vos modifications, continuez en sélectionnant l'onglet "Bot" dans le panneau de gauche.
![image](https://user-images.githubusercontent.com/73076854/226984754-70a52650-9ddc-4d87-8945-4e205a966e62.png)

Cliquez sur le bouton "Add Bot" à droite et confirmez la fenêtre pop-up en cliquant sur "Yes, do it !". Félicitations, vous êtes maintenant l'heureux propriétaire d'un nouveau bot Discord ! Mais vous n'avez pas encore tout à fait terminé.

Après avoir créé un utilisateur de robot, vous verrez une section comme celle-ci :
![image](https://user-images.githubusercontent.com/73076854/226984846-376a373c-e55d-4fc9-9d3b-e8dc19a64e26.png)
Dans ce panneau, vous pouvez donner à votre robot un avatar élégant, définir son nom d'utilisateur et le rendre public ou privé. Le token de votre robot sera révélé lorsque vous cliquerez sur le bouton "Réinitialiser le token" et que vous confirmerez. Lorsque nous vous demandons de coller le token de votre bot quelque part, c'est la valeur que vous devez indiquer. Si vous perdez le token de votre bot à un moment donné, vous devez revenir sur cette page et réinitialiser le token de votre bot, ce qui révélera le nouveau token et invalidera tous les anciens.

# Configuration du Bot
Modifier le fichier token.js et placer le token de votre Bot
```json
{
    "token": "YOUR_TOKEN_HERE"
}
```

# Démarrer le Bot
Ouvrir votre console et lancer la commande suivante :
```bash
node index.js
```
