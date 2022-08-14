import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import('cart/App'));

const App = () => {
  let cart = "http://localhost:3002"
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '70% 30%',
        width:"100%",
      }}
    >
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          border: "1px solid #4CAF50",
        }}
      >
        <h1>Home</h1>
      </div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          border: "1px solid #4CAF50",
        }}><h1>Cart</h1></div>
      <div style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'justify',
          border: "1px solid #4CAF50",
        }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis congue nisi, nec euismod dolor. Sed malesuada ipsum eget ullamcorper rhoncus. Morbi ornare blandit molestie. Donec ac turpis congue, auctor nisi a, gravida urna. Phasellus lorem purus, porttitor sit amet consequat eget, convallis eget odio. Aenean dapibus orci purus, a consectetur sem laoreet sit amet. Integer malesuada hendrerit est, et porta arcu hendrerit aliquet.</p>
          <p>Suspendisse pulvinar, tortor tempus sodales lobortis, risus justo hendrerit libero, quis vestibulum diam lectus in dolor. Proin a tristique odio. Aenean a fermentum eros. Nunc et sollicitudin enim. Quisque pretium ante nec nisi ullamcorper dapibus. Vivamus et odio eu velit ullamcorper vehicula. Sed sit amet imperdiet dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut et nisi imperdiet, elementum augue in, rutrum lectus. Nulla eget magna ac ipsum vestibulum volutpat. Aliquam erat volutpat. Aenean condimentum lacus non est scelerisque, at viverra ipsum consectetur. Sed interdum elit eu cursus iaculis. Nulla luctus justo turpis, quis suscipit mauris porta vitae. Etiam nibh diam, ultrices at suscipit nec, eleifend sit amet urna.</p>
          <p>Cras non eros feugiat, vehicula urna molestie, lobortis est. Praesent turpis mi, consectetur mattis mollis ut, interdum nec sem. Integer at egestas orci. Etiam laoreet, arcu vel varius viverra, nisl nunc efficitur ante, ac auctor leo erat et libero. Curabitur ut rhoncus ligula. Quisque accumsan mauris id neque laoreet, nec scelerisque neque condimentum. Quisque risus diam, aliquet eu aliquam non, ultricies id erat. Etiam quis velit dolor. Vestibulum venenatis eros eros, ac mattis quam dapibus vel. Etiam nec molestie mi. Nulla eu interdum erat. Nulla vulputate volutpat scelerisque.</p>
          <p>Phasellus tempus eros vel convallis rhoncus. Sed vel nisl volutpat, congue tortor et, pretium ipsum. In hac habitasse platea dictumst. In tincidunt elementum turpis, et efficitur lorem cursus quis. Cras tincidunt eros sollicitudin, ultrices erat vitae, faucibus lorem. Pellentesque placerat nisi ac ligula laoreet tincidunt. Mauris lectus nunc, porta eu cursus quis, lobortis nec est.</p>
          <p>Aliquam aliquet luctus rutrum. Aenean a euismod neque. Duis quis ultricies ipsum. Morbi ut facilisis lectus. Proin varius suscipit ex quis feugiat. Vestibulum odio sapien, congue at enim vel, suscipit pharetra ligula. Sed nulla lorem, vulputate ut auctor a, pharetra a urna.      </p>
      </div>
      <div style={{
          margin: '10px',
          padding: '10px',
          border: "1px solid #4CAF50",
        }}>
        <Suspense fallback={'loading...'}>
          <RemoteApp/>
        </Suspense>
        <div style={{
          margin: '10px',
          padding: '10px',
        }}>
          <form action={window.cartUrl}>
            <input style={{
              padding: '10px',
              cursor: "pointer",
              color:"white",
              backgroundColor:"#4CAF50",
            }} type="submit" value="Go to shopping cart" />
          </form>
        </div>
        
      </div>
      
    </div>
  );
};

export default App;
