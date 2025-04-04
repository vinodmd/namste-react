// const heading = document.createElement('h1');
// heading.innerHTML = 'hello world from js..!';
// const rootDiv = document.getElementById('root');
// rootDiv.appendChild(heading);



// react code.

// const heading = React.createElement('h1', { 'title': 'heading', 'id': 'heading1', 'className': 'headingClass' }, 'Hello world from react!..');
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);

// root.render(heading);
/**
 * 
 * <div class='parent'>
 *      <div class='child>
 *          <h1 class='heading'>hello World from react!..</h1>
 *      </div>
 * </div>
 */
// const parent = React.createElement('div', { 'className': 'parent' },
//     React.createElement('div', { 'className': 'child' },
//         React.createElement('h1', { 'className': 'heading' }, 'hello World from react!..'
//         )
//     )
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);

/**
 * 
 * <div class='parent'>
 *      <div class='child>
 *          <h1 class='heading'>hello World from react!..</h1>
 *          <h1 class='heading'>hello World from react Again!..</h1>
 *      </div>
 * </div>
 */
// const heading1 = React.createElement('h1', { 'className': 'heading', 'key': 'heading1' }, 'hello World from react!..');
// const heading2 = React.createElement('h1', { 'className': 'heading', 'key': 'heading2' }, 'hello World from react Again!..')
// const parent = React.createElement('div', { 'className': 'parent' },
//     React.createElement('div', { 'className': 'child' }, [heading1, heading2]
//     )
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);

/**
 * 
 * <div class='parent'>
 *      <div class='child>
 *          <h1 class='heading'>hello World from react!..</h1>
 *          <h1 class='heading'>hello World from react Again!..</h1>
 *      </div>
 *       <div class='child2'>
 *          <h1 class='heading'>hello World from react!..</h1>
 *          <h1 class='heading'>hello World from react Again!..</h1>
 *      </div>
 * </div>
 */
const headings = [React.createElement('h1', { 'className': 'heading', 'key': 'heading1' }, 'hello World from react!..'), React.createElement('h1', { 'className': 'heading', 'key': 'heading2' }, 'hello World from react again!..')]
const childs = [React.createElement('div', { 'className': 'child1', 'key': 'child1' }, headings), React.createElement('div', { 'className': 'child2', 'key': 'child2' }, headings)]
const parent = React.createElement('div', { 'className': 'parent' }, childs);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);