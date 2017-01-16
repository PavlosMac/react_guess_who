import React from 'react'


function DeckComponent() {


    this.deckImages = [{name: "Pavlos", img: "https://cdn.gogetfunding.com/wp-content/uploads/2016/03/5013557/img/DSC00703.jpg" },
    {name: "Linnea", img: "https://cdn.gogetfunding.com/wp-content/uploads/2016/03/5013557/img/DSC00689.jpg"}, {name: 'Olav', img: "http://www.skytter.no/2008/imgskytter/8806.jpg"}]



  render(){

    const pics = this.deckImages.map((person, index)=>{

      return (
        <div>
          <img src={person.img}/>
          <p>{person.name}</p>
        </div>
      )
    }


    return(
      <div className="div-pic">
        {pics}
      </div>
    )
  }


}

export default DeckComponent;
