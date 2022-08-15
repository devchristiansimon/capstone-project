import mongoose from 'mongoose';
import {HeroSchema} from './Heroes';
import {CardsSchema} from './Cards';

export const Heroes = mongoose.model('Heroes', HeroSchema, 'heroes');
export const Cards = mongoose.model('Cards', CardsSchema, 'cards');
