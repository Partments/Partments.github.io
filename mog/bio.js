// © 2024 nigger.xyz | All rights reserved.

window.addEventListener('load', () => {
    const bios = ["localhost ddoser", "I'm cooler, skidder", "ass, ass, ass", "I hate all niggers", "I am the master", "owner @ nigger.xyz", "founder @ discord.gg/ivi", "no limit gang", "nigger hunter", "skid my page nigger", "socks full of semen", "e-whore magnet"];
    const bioContainer = document.querySelector('#bio');
    let currentBioIndex = 0;
  
    function typeBio(bio) {
      let i = 0;
      const intervalId = setInterval(() => {
        bioContainer.innerHTML = bio.substring(0, i).split('').map(c => `<span>${c}</span>`).join('') + '<span class="cursor">|</span>';
        i++;
        if (i > bio.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            deleteBio(bio);
          }, 1000);
        }
      }, 100);
    }
  
    function deleteBio(bio) {
      let i = bio.length;
      const intervalId = setInterval(() => {
        bioContainer.innerHTML = bio.substring(0, i).split('').map(c => `<span>${c}</span>`).join('') + '<span class="cursor">|</span>';
        i--;
        if (i < 0) {
          clearInterval(intervalId);
          currentBioIndex++;
          if (currentBioIndex >= bios.length) {
            currentBioIndex = 0;
          }
          setTimeout(() => {
            typeBio(bios[currentBioIndex]);
          }, 1000);
        }
      }, 100);
    }
  
    typeBio(bios[currentBioIndex]);
  });