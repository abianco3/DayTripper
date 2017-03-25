import React from 'react';

class EventEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifOptions: false,
      ifEditEvent: false,
      description: '',
      start: '',
      end: ''
    }
    this.ifOptions = this.ifOptions.bind(this);
    this.ifEditEvent = this.ifEditEvent.bind(this);
    this.onRemoveEvent = this.onRemoveEvent.bind(this);
    this.onUpdateEvent = this.onUpdateEvent.bind(this);
  };

  ifOptions() {
    this.setState({
      ifOptions: !this.state.ifOptions
    })
  };

  ifEditEvent() {
    this.setState({
      ifEditEvent: !this.state.ifEditEvent
    })
  };

  onDescChange(e) {
    this.setState({
      description: e.target.value
    })
  };

  onStartChange(e) {
    this.setState({
      start: e.target.value
    })
  };

  onEndChange(e) {
    this.setState({
      end: e.target.value
    })
  };

  onUpdateEvent() {
    console.log('EVENT UPDATED!')
    var newEventInfo = {
      location: {location: this.props.event.location},
      newInfo: {description: this.state.description,
                start: this.state.start,
                end: this.state.end}
    };

    this.props.updateEvent(newEventInfo);
  };

  onRemoveEvent() {
    console.log('DELETED EVENT:', this.props.events[this.props.index]);

    const selectedEvent = this.props.events[this.props.index];
    this.props.removeEvent(selectedEvent)
  };

  render() {
    var timeBox = {
      width: 70,
      marginRight: 10,
      marginLeft: 10,
      textAlign: 'center',
      fontFamily: 'Century Gothic',
      fontSize: 17,
      border: 0,
      outline: 0,
      background: 'transparent',
      borderBottom: '1px solid black',
      display: 'inline-block'
    };

    var descBox = {
      width: 300,
      marginRight: 15,
      marginLeft: 5,
      textAlign: 'center',
      fontFamily: 'Century Gothic',
      fontSize: 17,
      border: 0,
      outline: 0,
      background: 'transparent',
      borderBottom: '1px solid black',
      display: 'inline-block'
    };

    if (this.state.ifEditEvent) {
      return (
        <li>
          <div onClick={this.ifOptions}>
            {this.props.event.description}
            <div>
            {this.props.event.start} – {this.props.event.end} at {this.props.event.location}
            </div>
          </div>

          <div>
            <button onClick={this.onRemoveEvent}>REMOVE</button>
            <button onClick={this.ifEditEvent}>EDIT</button>
          </div>

          <div>
            description:
            <input
              style={descBox}
              type="text"
              onChange={this.onDescChange}
            />
          </div>

          <div>
            <input
              placeholder='start'
              style={timeBox}
              type="text"
              onChange={this.onStartChange}
            />

            |
            <input
              placeholder='end'
              style={timeBox}
              type="text"
              onChange={this.onEndChange}
            />

            <button onClick={this.onUpdateEvent}>UPDATE</button>
          </div>
        </li>
      )
    };

    if (this.state.ifOptions) {
      return (
        <li>
          <div onClick={this.ifOptions}>
            {this.props.event.description}
            <div>
            {this.props.event.start} – {this.props.event.end} at {this.props.event.location}
            </div>
          </div>

          <div>
            <button onClick={this.onRemoveEvent}>REMOVE</button>
            <button onClick={this.ifEditEvent}>EDIT</button>
          </div>
        </li>
      )

    } else {
      return (
        <li>
          <div onClick={this.ifOptions}>
            {this.props.event.description}
            <div>
            {this.props.event.start} – {this.props.event.end} at {this.props.event.location}
            </div>
          </div>
        </li>
      )
    }
  };
};

export default EventEntry;