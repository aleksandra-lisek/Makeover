document.addEventListener("DOMContentLoaded", function() {
    const fringe = document.querySelector('.fringe');
    const eye = document.querySelector('.iris');
    const skin = document.querySelector('.face');
    const hair = document.querySelector('.hair');
    console.log(fringe);

    const inputFringe = document.querySelector('.fringe-change');
    const inputEye = document.querySelector('.eyes-color-change');
    const inputSkin = document.querySelector('.skin-color-change');
    const inputHair = document.querySelector('.hair-color-change');
    // console.log(inputs);


    function handleUpdate() {
        const suffix = this.dataset.sizing || '';
        fringe.style.height = `${this.value}${suffix}` ;
        console.log(this.name);
        console.log(this.value);

    }

    function handleUpdateColor() {
        hair.style.backgroundColor =`${this.value }`;
        fringe.style.backgroundColor =`${this.value }`;
        console.log(this.name);
        console.log(this.value);

    }
    function handleUpdateColorSkin() {
        skin.style.backgroundColor =`${this.value }`;

        console.log(this.name);
        console.log(this.value);

    }
    // input.addEventListener('input', handleUpdate));
    inputFringe.addEventListener('input', handleUpdate);
    // inputEye.addEventListener('input', handleUpdateColor);
    inputSkin.addEventListener('input', handleUpdateColorSkin);
    inputHair.addEventListener('input', handleUpdateColor);
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

});
