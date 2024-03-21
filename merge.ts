/* Segun al mensaje que salio en la consola de bash despues de aver hecho el procedimiento de Merge:
Observe que:
El mensaje Fast-forward significa que Git ha movido el puntero de la rama main hacia adelante hasta el último commit de la rama feature/Question-5, porque no hubo cambios en la rama main desde que creaste la rama feature/Question-5. En otras palabras, la rama main estaba atrasada respecto a feature/Question-5, por lo que Git simplemente “adelantó” la rama main.
El mensaje Q4.txt | 4 ++-- 1 file changed, 2 insertions(+), 2 deletions(-) te está mostrando qué cambios se han hecho en los archivos durante el merge. En este caso, el archivo Q4.txt ha tenido 2 inserciones y 2 eliminaciones.
Ahora, si haces git log en la rama main, deberías ver el historial de commits de la rama feature/Question-5 incluido en ella.

*/
// Información del merge
const mergeInfo = {
    sourceBranch: 'feature/Question-5',
    targetBranch: 'main',
    mergeStatus: 'Successful',
    filesChanged: [
      {
        fileName: 'Q4.txt',
        changes: {
          insertions: 2,
          deletions: 2,
        },
      },
    ],
  };
  
  console.log(mergeInfo);
