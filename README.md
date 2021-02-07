# Tourism Test App

## `Notes`

## Structure
I chose to go down the route of structuring the project's components using a folder per item. These folders each containing the pieces pertaining to that component, the css, (using CSS Modules , see below), the tests etc. This could also contain any other data required. In the past I have included the components types in a _types.ts file. The underscore is not apart of any real react/typescript naming convention but it does two things I feel are beneficial. The underscore normally denotes a private variable (at least in the .NET environment) and so in this case it seems apt. The other reason is simply to keep it at the top of the folder. 

One minor aspect of this structure I have a bit of a love/hate with is that the main file is always named index.tsx. Being able to reference the folder instead of a single file is useful however it can be a bit annoying when debugging as the file mentioned is always index.tsx. Yes the file location is also visible but the case can definitely be made that one looses valuable milliseconds when looking at offending lines in the debugger console.   

I did also choose to keep the Main.tsx page at the component level. This would normally be seperated into its own 'pages' or 'screens' folder but for the case of one page it seemed more straight forward to keep it in Components.
## Styling
As mentioned previously the styles for a particular component are stored in the components folder. Coupling this practice with CSS Modules makes for clean and easy to maintain CSS with the single issue of being unable to test elements based on 'Class Name' due to the fact that they are scoped locally using a uniquely generated prefix. In my option the benifit still outweighs this pitfall by far.
## Dark Mode
This feature was only partially implemented. In this instance I have only added it using the Context API. In practise this should save the preference to local storage or save it server side.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
