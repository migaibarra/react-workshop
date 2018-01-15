import React, {Component} from 'react'

class MyFirstComponent extends Component {
  render(){
    return(
        <table>
          <tr>
            <th>Name</th>
            <th>Discription</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Cat</td>
            <td>A fuzzy ball of fun</td>
            <td>$100/hr</td>
          </tr>
          <tr>
            <td>Dog</td>
            <td>More work, but greater payoff to keep</td>
            <td>$120/hr</td>
          </tr>
          <tr>
            <td>Turtle</td>
            <td>Low maintenance but still loving</td>
            <td>$15/hr</td>
          </tr>
        </table>)
  }
}

export default MyFirstComponent;
