//variáveis let(variável que vai ser mudada dps) ou const(variável vai ser constante)

//formas de se escrever:
//cameCase
//PascalCase
//snake_case

// i = i + 1 é igual ao i++

//humano lê 1234567810, máquina lê 0123456789

const LinksSocialMedia = {
  github: 'Sympati4',
  youtube: '',
  instagram: 'http_ryck',
  facebook: 'maykbrito',
  twitter: 'Rick_c0m'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()

// ARROW FUNCTIONS
//function title(name){
//code
//}

//argumento => {}
