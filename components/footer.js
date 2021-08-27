import React from 'react';

export default function PageFooter() {
  return (
    <>
    <br></br>
    <br></br>
    <footer id="footer">
      <table id="footerTable">
        <tr>
          <td id="tableCol">
            <p>Made with &#10084;&#65039; by the CSC2541 Course Staff.</p>
          </td>
          <td id="rightCol">
          </td>
        </tr>
      </table>
    {/* <div style={{position:"relative", right:0}}> */}
    {/* </div> */}
    </footer>
    <style jsx>{`
    #tableCol {
      width:100%;
      vertical-align: middle;
      padding-top: 15px;
    }

    #rightCol {
      padding-right: 10px;
      text-align: center;
    }

    #footer {
      border-top: double;
      position: fixed;
      bottom: 0px;
      height: 60px;
      max-width:500px;
      min-width:500px;
    }

    @media only screen and (max-width: 500px) {
      #tableCol {
        width:80%;
        vertical-align: middle;
        padding-top: 15px;
      }
      #footer {
        border-top: double;
        position: fixed;
        bottom: 0px;
        height: 80px;
        // I have no idea why this works but... I don't question it yet
        max-width:94.3%;
        min-width:94.3%;
      }    
    }
        
    #heart {
        text-decoration: none;
        cursor: text;
    }
      `}</style>
    </>
  )
}