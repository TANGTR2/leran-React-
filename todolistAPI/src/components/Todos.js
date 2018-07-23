import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import { Switch } from 'antd';
import { Tooltip } from 'antd';

export default class Todos extends Component {
  changeToEditable(event) {
    event.target.setAttribute('contentEditable', 'true');
    event.target.focus();
  }

  changeToOnlyRead(event, id) {
    const keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode === 13) {
      event.target.setAttribute('contentEditable', 'false');
      event.target.focus();
      this.props.updateItemContent(id, event.target.innerHTML);
    }
  }

  toggleActive = (id, status) => {
    this.props.toggleActiveHandler(id, status);
  };

  render() {
    console.log('render' + this.props.todos);
    return (
      <div>
        <ol>
          {this.props.todos.map(item => (
            <li className={item.status === 'completed' ? 'checked' : ''}>
              <Checkbox
                className="done-todo"
                checked={item.status === 'completed' ? 'checked' : ''}
                onClick={e => this.toggleActive(item.id, item.status)}
              />
              <Tooltip title="双击修改">
                <span
                  onKeyPress={e => this.changeToOnlyRead(e, item.id)}
                  onDoubleClick={e => this.changeToEditable(e)}
                >
                  {' '}
                  {item.content}{' '}
                </span>
              </Tooltip>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
