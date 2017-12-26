import React from 'react';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

class App extends React.Component {
    state = {
        data: ['', '', ''],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() {
        return (
            <WingBlank>
                <div className="sub-title">Normal</div>
                <Carousel
                    autoplay
                    infinite
                    selectedIndex={1}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(ii => (
                        <a
                            key={ii}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>

                <WhiteSpace />
                <div className="sub-title">Vertical</div>
                <Carousel className="my-carousel"
                    vertical
                    dots={false}
                    dragging={false}
                    swiping={false}
                    autoplay
                    infinite
                >
                    <div className="v-item">carousel 1</div>
                    <div className="v-item">carousel 2</div>
                    <div className="v-item">carousel 3</div>
                </Carousel>

            <WhiteSpace />
            <div className="sub-title">Lottery</div>
            <Carousel className="my-carousel"
                vertical
                dots={false}
                dragging={false}
                swiping={false}
                autoplay
                infinite
                speed={200}
                autoplayInterval={300}
                resetAutoplay={false}
            >
                {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
                    <div className="v-item" key={type}>{type}</div>
                ))}
            </Carousel>
            </WingBlank>
        );
    }
}

export default App;
