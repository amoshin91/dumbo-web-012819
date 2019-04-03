import React from "react";
import BeyCard from './BeyCard'


const BeyContainer = (props) => {
  const beyCards = props.beys.map(bey => <BeyCard key={bey.id} handleClick={props.handleClick} bey={bey} />)
  return (
    <div className="index">
      <h1>Index</h1>
      {beyCards}
    </div>
  );

}



// class BeyContainer extends React.Component {
//   render() {
//     // console.log('What are my props?', this.props)
//     const beyCards = this.props.beys.map(bey => <BeyCard handleClick={this.props.handleClick} bey={bey} />)
//
//     return (
//       <div className="index">
//         <h1>Index</h1>
//         {beyCards}
//       </div>
//     );
//   }
// }

export default BeyContainer;
