const { fail } = require('assert'); //????ja ne go pisav ova
const fs = require('fs');
const path = require('path'); //????niti ova
const { dirname } = require('path'); //????niti pa ova


// 1.fs.promises.openDir
const openDir = (path) => {
    return new Promise((success, fail) => {
        fs.openDir(path.toString(), err);
        if (err) return fail(err);
        return success();
    });
};

openDir('../HomeworkMilkyWay')
    .then(() => {
        console.log('Congrats, you cracked the MilkyWay')
    })
    .catch(err => {
        console.log(err);
    }); //FAIL

/////////////////////////////////////////////////////////////////////
// 2.fs.copyFile
const copyFile = (src, dest) => {
    return new Promise((success, fail) => {
        fs.copyFile(src, dest, err => {
            if (err) return fail(err);
            return success();
        });
    });
};

copyFile('./example4copyFile.txt', '../example4copyFile.txt')
    .then(() => {
        console.log('File copied one folder level up');
    }).catch(err => {
        console.log(err);
    }); ////FALA TI GOSPODE ZLATEN!!!! NI NA KRAJ PAMET DEKA OVA KE RABOTI!
///////////////////////////////////////////////////////////////////////
//3.fs.existsSync
const existsSync = (path) => {
    return new Promise((success, fail) => {
        fs.existsSync(path, err => {
            if (err) return fail(err);
            return success();
        });
    });
};

existsSync('./index.js')
    .then(() => {
        console.log('File not deleted yet.');
    }).catch(err => {
        console.log(err);
    }); //FAIL
//////////////////////////////////////////////////////////////
//4.fs.renameSync
const renameSync = (oldFileName, newFileName) => {
    return new Promise((succcess, fail) => {
        fs.renameSync(oldFileName, newFileName, err => {
            if (error) return fail(error);
            return succcess();
        });
    });
};

renameSync('./example4copyFile.txt', './ex4copyFile.txt')
    .then(() => {
        console.log('Filename updated!');
    }).catch(err => {
        console.log(err);
    }); //SUCCESS (file renamed, but no console.log report)
//////////////////////////////////////////////////////////////////////
//.5fs.rm
const rm = (path) => {
    return new Promise((success, fail) => {
        fs.rm(path, err => {
            if (err) return fail(err);
            return success();
        });
    });
};

rm('./file4rm.txt')
    .then(() => {
        console.log('File deleted');
    }).catch(err => {
        console.log(err);
    }); //SUCCESS! 


//TIME SPENT ON PROJECT: 2h24min (for future analyzing)