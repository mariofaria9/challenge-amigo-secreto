This software adds, erase, create list and raffle the name of a secret friend.
The current code is part of a challenge from an education partnership between Alura and Oracle.

First of all I created the repository in Github. After, I created the local repository with the main files (app.js, index.html and style.css). Then, I commited and syncronized everything.

Started day 1 creating 4 functions and the main List:

- List : declared "listaAmigos" as an array;
Print overview:
![image](https://github.com/user-attachments/assets/8ebf7c81-7610-4a17-8d59-988ad1b8177a)

- adicionarAmigo() : adds a name into a list; The function uses "queryselector" for the name input, the ".includes" to check if the element already exists in the list and ".push" that inserts the name into the list. This function also hava a call to another function to show the names in the screen, and at the end another function to clean the input field after the button click;
Print overview:
![image](https://github.com/user-attachments/assets/5fca7dfe-4168-418f-afcd-eef9a1c7cd59)

- limparCampo() : cleans up the input field; The function uses "queryselector" to catch the input field and clean it with ".value = ``";
Print overview:
![image](https://github.com/user-attachments/assets/d8d7fe4b-2b75-4dc3-9258-156813134cd8)

- exibirLista(nome) : shows the name you input at the bottom of the input field vertically; The function uses "getElementById" to select the list, then cleans the list using innerHTML. After, it starts a foreach loop in which iterates and go through the list, using "createElement('li')", then uses "textContent" to define the new name as a text. To finish the function, it finally uses the "appendChild" to include the names into the list showing it in the screen as a list.
Print overview:
![image](https://github.com/user-attachments/assets/5fca7dfe-4168-418f-afcd-eef9a1c7cd59)
![image](https://github.com/user-attachments/assets/9f3a0aff-1ec2-4934-b4c4-e3ba0f9e8af0)

- apagarLista() : erase all the names in the list; To have a function to clean all the names in the list, the apagarLista() function was created. It cleans the array using listaAmigos=[], then usisng "getElementById" it selects the list, then uses " lista.innerHTML='' ", to remove all the elements in the list;
Print overview:
![image](https://github.com/user-attachments/assets/b0480f24-1584-4568-9f41-255d2f717974)


Started day 2 creating 2 functions and adjusting the HTML and CSS:

- apagarNome() : erases the name you input from the list, and if the name doesn't exist, it shows a massage that the name doesn't exist in the list. The function uses "getElementById('inputNomeApagar').value" to get the value input. Then it finds the name with "let index = listaAmigos.indexOf(nomeParaApagar);" After, it enters in an If Else condition using the "listaAmigos.splice(index, 1);" to remove the name from the list, the it shows the list updated using the function exibirLista(). After the else appears if the name doesn't exist in the list, showing a negative message.
Print overview:
![image](https://github.com/user-attachments/assets/3c7cbe9b-8622-4837-a2f8-d8d2e58846d5)
![image](https://github.com/user-attachments/assets/6598e152-5963-47d2-99b5-28c6626bc0c0)

- sortearAmigo() : By clicking the button it choose aleatory a name to be your secret friend. The function uses as a base an If-else structure, and If the list is empty it shows a message in which suggest that you should enter names through yhe list. Then, in else area, it starts getting the number of elements using "let numeroMaximo = listaAmigos.length;" Then using this number, it creates a romdomically number through "let sorteado = Math.floor(Math.random() * numeroMaximo);" Then it gets the name in the list and store in a variable "let nomesorteado = listaAmigos[sorteado];" Then uses .getElementById to catch the list and "lista.innerHTML = "O seu amigo secreto é " + nomesorteado;" to show a message replacing the list showed in the screen. After it uses "listaAmigos.splice(sorteado, 1);" to remove the raffled element from the list, updating it. To finish the structure it has an If, when the number of elements in the list goes to zero, it shows a message that the Raffle is finished.
Print overview:
![image](https://github.com/user-attachments/assets/131c3a5e-b59c-4e79-8ffa-cf2db8c6a9c8)
![image](https://github.com/user-attachments/assets/821cf156-1773-40cb-a763-e0aa850c772a)
![image](https://github.com/user-attachments/assets/cbd15087-025c-40d7-8781-1897aa9145b8)

Special Notes:
After testing all the functions and adjusting the HTML and CSS to fit perfectly, it was commited to Github. 
The Project was deployed at Github pages on february, 6, 2025. Follows its link: https://mariofaria9.github.io/challenge-amigo-secreto/

It was a great and rewarding journey with lots of learning. Now it appears that the preparation to a developer career started the best way. And it's just only the basics of development. Thanks Alura and Oracle to give me this opportunity.

Signed by: Mario Andrade de Faria


