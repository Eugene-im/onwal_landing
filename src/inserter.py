import os

thisdir = os.getcwd()
extends = ['.cpp', ".hpp", ".h", ".c", ".js", ".ts", '.html', '.scss', ".jsx"] # add extend for the add copyring string 
listall = []
for root, dirs, files in os.walk(thisdir):
    for file in files:
        for ext in extends:
            if file.endswith(ext):
                listall.append(os.path.join(root, file))


def line_prepender(filename, line):
    with open(filename, 'r+', encoding = 'utf-8') as f:
        f.seek(0, 0)
        content = f.read()
        f.seek(0, 0)
        f.write(line.rstrip('\r\n') + '\n' + content)

for f in listall:
    commentStart = '/*'
    commentEnd = '*/'

    if(f.endswith('.html')): # this for coustum extends files 
        commentStart = '<!--'
        commentEnd = '-->'
    
    next = False
    with open(f, 'r+', encoding = 'utf-8') as fl:
        first_line = fl.readline()
        if first_line == (commentStart + "******************************************************************************\n") :
            next = True

    if next == True:
        continue

    # <!--This is a comment. Comments are not displayed in the browser-->

    copyright = '''{commentStart}******************************************************************************
 * NETTR GROUP CONFIDENTIAL                                                    *
 * ________________________________________________________________________    *
 *                                                                             *
 *  Copyright (C) 2020 Nettr Group                                             *
 *  All Rights Reserved.                                                       *
 *                                                                             *
 * NOTICE:  All information contained herein is, and remains the property      *
 * of Nettr Group and its suppliers, if any.  The intellectual and technical   *
 * concepts contained herein are proprietary to Nettr Group and its            *
 * suppliers, and are protected by trade secret or copyright law.              *
 * Dissemination of this information or reproduction of this material          *
 * is strictly forbidden unless prior written permission is obtained           *
 * from Nettr Group.                                                           *
 *****************************************************************************{commentEnd}
'''.format(commentStart=commentStart, commentEnd=commentEnd)
    line_prepender(f, copyright)
