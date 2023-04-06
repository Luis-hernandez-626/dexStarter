import React from 'react'
import Eth from "../eth.svg";
import Logo from "../moralis-logo.svg";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className= "leftH">
        

        <Link to ="/" className='link'>
          <div className="headerItem">Buy</div>
        </Link>

        <Link to ="/tokens" className='link'>
          <div className="headerItem">Token</div>
        </Link>


      </div>
      <div className="rigthH">
        <div className ="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        
        <div className="connectButton">
          connect
        </div>

      </div>

    </header>
  )
}

export default Header