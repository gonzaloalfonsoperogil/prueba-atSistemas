/**
 * @name base-component.abstract
 * @author Gonzalo Alfonso
 * 
 */

import { Subscription } from "rxjs";

/**
 * @class
 * @abstract
 * @name BaseComponent
 * @export BaseComponent
 * 
 * @description Clase abstracta que funciona como interfaz del modelo de declaración minimo de todos los componentes de la aplicacion.
 */
export abstract class BaseComponent{
    /**
     * @constructor
     * Constructor for {@link BaseComponent}
     */
    constructor() {}

    /**
     * @protected
     * @name _subscriptions
     */
    protected _subscriptions: Subscription[] = []

    /**
     * @protected
     * @name _subscribe
     */
    protected _subscribe() {
        throw new Error('Error in BaseComponent._subscribe, please rewrite this method in your Class implementation.');
    }

    /**
     * @protected
     * @name _unsubscribe
     */
     protected _unsubscribe() {
       this._subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }
}