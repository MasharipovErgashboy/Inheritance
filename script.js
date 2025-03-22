 const animals = [];
      const container = document.getElementById("animal-container");

      function addAnimal() {
        // Inputlardan qiymatlarni olish
        const name = document.getElementById("animalName").value;
        const age = document.getElementById("animalAge").value;
        const color = document.getElementById("animalColor").value;
        const type = document.getElementById("animalType").value;
        const owner = document.getElementById("ownerName").value;

        // Kiritilgan ma'lumotni tekshirish
        if (!name || !age || !color || !type || !owner) {
          alert("Please fill out all fields.");
          return;
        }

        // Hayvon obyektini yaratish
        const animal = { name, age, color, type, owner };
        animals.push(animal);

        // Hayvonlarni ekranga chiqarish
        renderAnimals();

        // Formani tozalash
        clearForm();
      }

      function renderAnimals() {
        container.innerHTML = ""; // Oldingi ma'lumotlarni tozalash
        animals.forEach((animal) => {
          const card = document.createElement("div");
          card.className = "animal-card";

          // Background Image uchun rang va hayvon turi
          let animalImage = "";
          if (animal.type === "Cat") {
            animalImage = `https://via.placeholder.com/100/${animal.color}/ffffff?text=Cat`;
          } else if (animal.type === "Fish") {
            animalImage = `https://via.placeholder.com/100/${animal.color}/ffffff?text=Fish`;
          } else if (animal.type === "Bird") {
            animalImage = `https://via.placeholder.com/100/${animal.color}/ffffff?text=Bird`;
          }

          // Kartochka yaratish
          card.innerHTML = `
            <div class="animal-image" style="background-image: url('${animalImage}')"></div>
            <h2>${animal.type}</h2>
            <p><strong>Name:</strong> ${animal.name}</p>
            <p><strong>Age:</strong> ${animal.age}</p>
            <p><strong>Owner:</strong> ${animal.owner}</p>
          `;

          container.appendChild(card);
        });
      }

      function clearForm() {
        document.getElementById("animalName").value = "";
        document.getElementById("animalAge").value = "";
        document.getElementById("animalColor").value = "ff0000";
        document.getElementById("animalType").value = "Cat";
        document.getElementById("ownerName").value = "";
      }
