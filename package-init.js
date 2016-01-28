// Browser environment
if(typeof window !== 'undefined') {
    KeyRack = (typeof window.KeyRack !== 'undefined') ? window.KeyRack : require('ethereumjs-accounts');
}


// Node environment
if(typeof global !== 'undefined') {
    KeyRack = (typeof global.KeyRack !== 'undefined') ? global.KeyRack : require('ethereumjs-accounts');
}