import React, {component} from 'react'
import {FormControl, Button, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NewsClassificationDemo = () => (
      <div>
        <form>
          <FormControl
            type="text"
            placeholder="Enter URL"
          />
          <Button>
            Classify!
          </Button>
          <Link to='/'>
            <Button>Close Demo</Button>
          </Link>
        </form>
      </div>
  )


export default NewsClassificationDemo;
