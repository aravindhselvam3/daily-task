function searchDictionary() {
    const word = document.getElementById('wordInput').value;
  
    if (word === '') {
      alert('Please enter a word.');
      return;
    }
  
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .then(data => {
        displayResults(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    if (data.title === 'No Definitions Found') {
      resultsDiv.textContent = 'No definitions found for the given word.';
      return;
    }
  
    for (const entry of data) {
      const wordDiv = document.createElement('div');
      wordDiv.classList.add('word');
      wordDiv.innerHTML = `<h2>${entry.word}</h2>`;
  
      if (entry.phonetics.length > 0) {
        const audioUrl = entry.phonetics[0].audio;
        if (audioUrl) {
          const audioBtn = document.createElement('button');
          audioBtn.innerHTML = '&#128266;';
          audioBtn.classList.add('audio-button');
          audioBtn.addEventListener('click', () => {
            const audio = new Audio(audioUrl);
            audio.play();
          });
  
          wordDiv.appendChild(audioBtn);
        }
      }
  
      for (const meaning of entry.meanings) {
        const partOfSpeech = meaning.partOfSpeech;
        const definitions = meaning.definitions;
  
        const meaningDiv = document.createElement('div');
        meaningDiv.classList.add('meaning');
        meaningDiv.innerHTML = `<h3>${partOfSpeech}</h3>`;
  
        for (const definition of definitions) {
          const definitionText = definition.definition;
          const example = definition.example || '';
  
          const definitionP = document.createElement('p');
          definitionP.innerHTML = `<strong>Definition:</strong> ${definitionText}`;
  
          const exampleP = document.createElement('p');
          exampleP.innerHTML = `<strong>Example:</strong> ${example}`;
  
          meaningDiv.appendChild(definitionP);
          meaningDiv.appendChild(exampleP);
        }
  
        wordDiv.appendChild(meaningDiv);
      }
  
      resultsDiv.appendChild(wordDiv);
    }
  }
  
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      searchDictionary();
    }
  }
  
