import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const singInWithGoogle = async() => {

    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const {uid, displayName, photoURL, email} = result;
        
        return {
            ok: true,
            uid,
            displayName,
            photoURL,
            email
        }
        
    } catch (error) {
        const errorMessage = error.errorMessage;

        return {
            ok: false,
            errorMessage
        }
    }

}
