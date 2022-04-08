const switchBtn = document.querySelector('.switch');
const basicPackage = document.getElementById('basic-money');
const professionalPackage = document.getElementById('professional-money');
const masterPackage = document.getElementById('master-money');

switchBtn.addEventListener('click', () => {
  switchBtn.classList.toggle('active');
  if (switchBtn.classList.contains('active')) {
    basicPackage.innerText = `199.99`;
    professionalPackage.innerText = `249.99`;
    masterPackage.innerText = `399.99`;
  } else {
    basicPackage.innerText = `19.99`;
    professionalPackage.innerText = `24.99`;
    masterPackage.innerText = `39.99`;
  }
});
