// Menambahkan list baru
			const btnAdd = document.getElementById('add');
			btnAdd.addEventListener('click', () => {
				const input = document.getElementById('text').value;
				const list = document.getElementById('list');

				const newList = document.createElement('div');
				newList.setAttribute('class', 'list-item');
				const paragraph = document.createElement('p');
				newList.append(paragraph);

				const newText = document.createTextNode(input);
				paragraph.append(newText);

				const close = document.createElement('img');
				close.setAttribute('src', 'close-line.svg');
				close.setAttribute('class', 'close');

				paragraph.after(close);

				if (input === '') {
					alert('fill in your to-do list first!');
				} else {
					list.append(newList);
				}

				document.querySelector('#text').value = '';
			});

			// Menghapus list
			const list = document.getElementById('list');

			list.addEventListener('click', (e) => {
				if (e.target.className === 'close') {
					e.target.parentElement.style.display = 'none';
				} else if (e.target.className === 'list-item') {
					e.target.classList.add('checked');
				} else if (e.target.className === 'list-item checked') {
					e.target.classList.remove('checked');
				}
			});