// I made this file to easily import images

export const images = {
  logo: '.../images/logo.jpg',
  orangeVestWorker: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  workerOnWoodenRailings: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  whiteMedicalEquipment: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  largeWhiteMachine: 'https://images.unsplash.com/photo-1666214280352-db292c05fd80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
}

const imageContainersArray = [
  { container: 'logo', image: images.logo },
  { container: 'whiteMed', image: images.whiteMedicalEquipment },
  { container: 'orangeVest', image: images.orangeVestWorker },
  { container: 'medicalServices', image: images.whiteMedicalEquipment },
  { container: 'largeMedicalServices', image: images.largeWhiteMachine },
  { container: 'constructionServices', image: images.orangeVestWorker },
]

const setImage = ( container, image ) => container.src = image

imageContainersArray.forEach(({container, image}) => {
  setImage(document.getElementById(container), image)
})
