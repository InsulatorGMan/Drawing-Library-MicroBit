/**
 * Draw to the led screen
 */

//% weight=110 color=#ff7b00 icon="\uf1fc" block="Drawing Blocks"
namespace drawing {

    //% block
    export class LedImage {

        value: Array<Number[]>;
        name: String;

        constructor(value: Array<Number[]>) {

            this.value = value;

        }

    }

    //% block
    export function arrayToLedImage(leds: Array<Number[]>) {

        return new LedImage(leds)

    }

    //% block
    export function drawImage(leds: LedImage) {

        for (let x = 0; x < leds.value.length; x++) {

            for (let y = 0; y < leds.value[x].length; y++) {

                if (leds.value[x][y] == 1) {

                    led.plot(x, y)

                } else {

                    led.unplot(x, y)

                }

            }

        }

    }

    //% block
    export function clearLeds() {

        for(let x = 0; x < 5; x++) {

            for(let y = 0; y < 5; y++) {

                led.unplot(x,y);

            }

        }

    }

}