import React,{Component} from 'react';
import '../styles/projectItem.css';
import {Responsive, WidthProvider} from 'react-grid-layout';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ProjectItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      className: "layout",
      rowHeight: 15,
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      layouts: {
        lg:[{i:'a', x:2, y:0, w:3, h:2, static: true},
            {i:'b', x:5, y:0, w:4, h:2, static: true}],
        md:[{i:'a', x:1, y:0, w:3, h:2, static: true},
            {i:'b', x:4, y:0, w:4, h:2, static: true}],
        sm:[{i:'a', x:0, y:0, w:3, h:2, static: true},
            {i:'b', x:3, y:0, w:2, h:2, static: true}],
        xs:[{i:'a', x:0, y:0, w:4, h:2, static: true},
            {i:'b', x:0, y:3, w:4, h:2, static: true}],
      },
      img: this.props.img,
      title : this.props.title,
      githubLink : this.props.githubLink,
      introduction : this.props.introduction,
      demoPath: this.props.demoPath
    }
  }
  componentDidMount() {
    this.setState({ mounted: true });
  }

  onBreakpointChange = breakpoint => {
    this.setState({
      currentBreakpoint: breakpoint,
      layout: this.state.layouts[breakpoint]
    });
  }

  render(){
    return(
      <ResponsiveReactGridLayout className="layout" style={{backgroundColor:'#101010'}}
        breakpoints={{lg:1200, md:996, sm:768, xs: 480, xxs:0}}
        cols={{lg:12, md: 10, sm: 6, xs: 4, xxs: 2}}
        layouts = {this.state.layouts}>
        <div className="col" key="a">
          <img src={this.state.img}
               className='project-item-img' alt="Project Image"/>
        </div>
        <div className='col' key="b">
          <h3 className="project-item-intro-header">
            <a href={this.state.githubLink} target="_blank">
            News Classification</a>
          </h3>
          <div className="project-item-intro-wrapper">
            <h4 className="project-item-intro">
              {this.state.introduction}
            </h4>
            <Link to={this.props.demoPath}>
              <Button bsStyle="info" bsSize="sm" block>Demo</Button>
            </Link>
          </div>
        </div>
      </ResponsiveReactGridLayout>
    )
  }
}
