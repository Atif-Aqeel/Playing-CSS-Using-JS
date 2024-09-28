
document.addEventListener('DOMContentLoaded', () => {
    console.log(' SCRIPT EXECUTED ');
    
    const inputs = document.querySelectorAll('.controls input');
    // console.log('inputs:', inputs);
    
    function handleUpdate() {
        const suffix = this.dataset.sizing || '';
        const docEle = document.documentElement;
        docEle.style.setProperty(`--${this.name}`, this.value + suffix);
    }
    
    inputs.forEach(input => {
        input.addEventListener('change', handleUpdate);
    });

    inputs.forEach(input => {
        input.addEventListener('mousemove', handleUpdate)
    });

})    

