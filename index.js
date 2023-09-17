function doIt() {

    let myData = fetch("./data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return data;
    })

    myData.then(function(score){
        const reaction = document.getElementById('reaction-score') ;
        reaction.innerText = score[0].score;
        const memory = document.getElementById('memory-score');
        memory.innerText = score[1].score;
        const verbal = document.getElementById('verbal-score'); 
        verbal.innerText = score[2].score;
        const visual = document.getElementById('visual-score');
        visual.innerText = score[3].score;

        const allPicElements = document.getElementsByClassName('scores-icons');
        const allScoresElements = document.getElementsByClassName('score_variable');
        
        for (let i = 0; i<allPicElements.length; i++){
            allPicElements.item(i).src=score[i].icon;
            allScoresElements.item(i).innerText = score[i].score;

        }
        

    })
}