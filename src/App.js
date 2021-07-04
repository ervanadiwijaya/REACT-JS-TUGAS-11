import React from "react";
import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
  Dimmer,
  Loader,
  Image,
  Placeholder,
  List
} from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon>
                <Icon name='search' />
                Cari document
              </Header>

              <Search placeholder='Search document...' />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name='file pdf outline' />
                Tambah document baru
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>

      <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          {/* <Segment > */}
          <h3>Website terkait</h3>
          <List>
            <List.Item icon='linkify' content='Google' />
            <List.Item icon='linkify' content='Facebook' />
            <List.Item icon='linkify' content='Semantic UI' />
            <List.Item icon='linkify' content='Niomic' />
            <List.Item icon='linkify' content='ReactY' />
          </List>
          {/* </Segment> */}
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
