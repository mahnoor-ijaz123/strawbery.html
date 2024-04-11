
    const container = document.getElementById('container');
    const totalBoxes = 40;
    let frogIndex = Math.floor(Math.random() * totalBoxes);
    let strawberryIndex = Math.floor(Math.random() * totalBoxes);

    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        if (i === frogIndex) {
            const frog = document.createElement('img');
            frog.src = './frog.png';
            frog.id = 'frog';
            box.appendChild(frog);
        } else if (i === strawberryIndex) {
            const strawberry = document.createElement('img');
            strawberry.src = './strawbery.png'; // Replace with the path to your strawberry image
            strawberry.id = 'strawberry';
            box.appendChild(strawberry);
        }
        container.appendChild(box);
    }

    function moveFrog(direction) {
        const prevBox = container.children[frogIndex];
        prevBox.innerHTML = '';

        switch (direction) {
            case 'right':
                frogIndex = (frogIndex + 1) % totalBoxes;
                break;
            case 'left':
                frogIndex = (frogIndex - 1 + totalBoxes) % totalBoxes;
                break;
            case 'up':
                frogIndex = (frogIndex - 8 + totalBoxes) % totalBoxes;
                break;
            case 'down':
                frogIndex = (frogIndex + 8) % totalBoxes;
                break;
            default:
                break;
        }

        const currentBox = container.children[frogIndex];
        const frog = document.createElement('img');
        frog.src = './frog.png';
        frog.id = 'frog';
        currentBox.appendChild(frog);

        if (frogIndex === strawberryIndex) {
            let newStrawberryIndex;
            do {
                newStrawberryIndex = Math.floor(Math.random() * totalBoxes);
            } while (newStrawberryIndex === frogIndex);

            const newStrawberryBox = container.children[newStrawberryIndex];
            const strawberry = document.createElement('img');
            strawberry.src = './strawbery.png'; // Replace with the path to your strawberry image
            strawberry.id = 'strawberry';
            newStrawberryBox.innerHTML = '';
            newStrawberryBox.appendChild(strawberry);
            strawberryIndex = newStrawberryIndex;
        }
    }

