import * as React from 'react';

export const AboutPage: React.FunctionComponent<{}> = () => {
  return (
    <div className="wrapper">
      <h1 className="header jumbotron text-center mb-2">
        About Naptown Dog Sitters
      </h1>
      <div className="content">
        <h3 className="text-justify">
          <small>
            We watch your dogs sleep, but not in a creepy way.
          </small>
        </h3>
      </div>
    </div>
  )
}