var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <title>BlueSurge</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <h1 className="page-header">BlueSurge Token</h1>
        <div className="row">
          <div>
            <h3 className="sub-header">Stake Tokens</h3>
            <form className="form-inline" role="form">
              <div className="form-group">
                <table>
                  <tbody><tr>
                      <td><label htmlFor="stakeAmt">Amount: </label> </td>
                      <td>
                        <input className="form-control" id="stakeAmt" />
                      </td>                          
                    </tr>
                  </tbody></table>
              </div>
              <a href="#" onclick="stake()" className="btn btn-primary">Stake</a>
            </form>
          </div>
        </div>   
        <div className="row">
          <div>
            <h3 className="sub-header">Stake Tokens</h3>
            <form className="form-inline" role="form">
              <div className="form-group">
                <table>
                  <tbody><tr>
                      <td><label htmlFor="removed">Amount: </label> </td>
                      <td>
                        <input className="form-control" id="removed" />
                      </td>                          
                    </tr>
                  </tbody></table>
              </div>
              <a href="#" onclick="_removeStake()" className="btn btn-primary">Remove Stake</a>
            </form>
          </div>
        </div>   
        <div className="row">
          <div>
            <h3 className="sub-header">Transfer Tokens</h3>
            <form className="form-inline" role="form">
              <div className="form-group">
                <table>
                  <tbody><tr>
                      <td><label htmlFor="transferAmt">Amount: </label> </td>
                      <td>
                        <input className="form-control" id="transferAmt" />
                      </td>                          
                    </tr>
                  </tbody></table>
              </div>
              <div className="form-group">
                <table>
                  <tbody><tr>
                      <td><label htmlFor="reciever">Reciever: </label> </td>
                      <td>
                        <input className="form-control" id="reciever" />
                      </td>                          
                    </tr>
                  </tbody></table>
              </div>
              <a href="#" onclick="send()" className="btn btn-primary">Send</a>
            </form>
          </div>
        </div> 
        <div className="row">
          <div>
            <h3 className="sub-header">Buy Tokens</h3>
            <form className="form-inline" role="form">
              <div className="form-group">
                <table>
                  <tbody><tr>
                      <td><label htmlFor="buyAmt">Amount: </label> </td>
                      <td>
                        <input className="form-control" id="buyAmt" />
                      </td>                          
                    </tr>
                  </tbody></table>
              </div>
              <a href="#" onclick="buy()" className="btn btn-primary">Buy</a>
            </form>
          </div>
        </div> 
        <h2>More: </h2>
        <div className="row">
          <div>
            <h3 />
            <form className="form-inline" role="form">
              <a href="#" onclick="withdraw()" className="btn btn-primary">Withdraw your reward</a>
              <p />
              <a href="#" onclick="viewStakedBalance()" className="btn btn-primary">View balance of staked tokens</a>
              <div className="form-group">
                <table>
                  <tbody><tr>
                      <td><span id="status" /></td>
                      <td>
                        <label id="stakeAmt">
                        </label></td>                          
                    </tr>
                  </tbody></table>
              </div>
              <p />
              <a href="#" onclick="viewTokenBalance()" className="btn btn-primary">View your token balance</a>
              <div className="form-group">
                <table>
                  <tbody><tr>
                      <td><span id="_balance" /></td>
                      <td>
                        <label id="_amnt">
                        </label></td>                          
                    </tr>
                  </tbody></table>
              </div>                
            </form>
          </div>
          
        </div>
      </div>
    );
  }
});
