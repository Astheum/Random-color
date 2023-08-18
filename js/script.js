const setBackground = () => {
    const randomColor = Math.random() .toString(16) .slice(2,8) .padEnd(6,0);
        document.body.style.backgroundColor = "#" + randomColor;
        color.innerHTML = "#" + randomColor;
    }
    
    btn.addEventListener("click", setBackground);
    setBackground();