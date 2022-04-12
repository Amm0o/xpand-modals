setTimeout(() => {
  const parent = document.getElementsByTagName('section');

  // Retirar todos os modals
  const secs = document.getElementsByClassName('modal-content');

  // Get the modal
  var modals = document.getElementsByClassName('myModal');

  // Get the button that opens the modal
  var btns = document.getElementsByClassName('myBtn');

  // Get the <span> element that closes the modal
  var spans = document.getElementsByClassName('close');

  // When the user clicks the button, open the modal

  // When the user clicks on <span> (x), close the modal
  for (c = 0; c < spans.length; c++) {
    spans[c].addEventListener('click', () => {
      for (let i = 0; i < spans.length; i++) {
        modals[i].style.display = 'none';
      }
    });
  }

  // Verificar se existe mais de 1
  for (let c = 0; c < btns.length; c++) {
    btns[c].addEventListener(
      'click',
      e => {
        if (parent.length > 1) {
          for (let c = 0; c < parent.length; c++) {
            let status = 0;
            let tester = document.querySelectorAll(`[id="${parent[c].id}"]`);

            if (tester.length > 1) {
              for (let i = 0; i < tester.length; i++) {
                if (tester[0].id === tester[i].id) {
                  if (status === 0) {
                    status = 1;
                  } else {
                    tester[i].classList.add('hide-modal');
                    tester[i].addEventListener('click', () => {
                      document.getElementsByClassName(
                        `modal-${tester[0].id}`
                      )[0].style.display = 'block';
                    });
                  }
                }
              }
            }
            status = 0;
          }
        }

        setTimeout(() => {
          // Abrir sempre o primeiro modal
          document.getElementsByClassName(
            `modal-${e.target.classList[2]}`
          )[0].style.display = 'block';
        });
      },
      2000
    );
  }
}, 1500);
