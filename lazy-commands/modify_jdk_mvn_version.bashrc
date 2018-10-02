#!/bin/bash
# cerner_2^5_2018

# Change java or maven version in the current bash. To use:
# 1. Add these two functions to your bash.bashrc
# 2. For each of your existing jdk and maven versions, add a new environment variable that is named
#    JDK<version>_LINUX or MAVEN_HOME_<version>_LINUX (don't use special characters such as '.' in version)
#    and its value is the directory in linux format. Some of mine:
#      * JDK7_LINUX = /c/Program Files/Java/jdk1.7.0_80
#      * JDK8_LINUX = /c/Program Files/Java/jdk1.8.0_151
#      * MAVEN_HOME_305_LINUX = /d/Coding/apache-maven-3.0.5
#      * MAVEN_HOME_354_LINUX = /d/Coding/apache-maven-3.5.4
# 3. In bash, type something like 'jdk 9' or 'maven 354'

jdk(){
    if [ -n "${JAVA_HOME+x}" ]; then
        export PATH=$(echo $PATH | sed -E -e "s;:$JAVA_HOME/bin;;" -e "s;$JAVA_HOME/bin:?;;")
    fi
    jdk_en_var_name="JDK$1_LINUX"
    export JAVA_HOME=${!jdk_en_var_name}
    export PATH=$JAVA_HOME/bin:$PATH
    eval "java -version"
}

maven(){
    if [ -n "${M2_HOME+x}" ]; then
        export PATH=$(echo $PATH | sed -E -e "s;:$M2_HOME/bin;;" -e "s;$M2_HOME/bin:?;;")
    fi
    mvn_en_var_name="MAVEN_HOME_$1_LINUX"
    export M2_HOME=${!mvn_en_var_name}
    export PATH=$M2_HOME/bin:$PATH
    eval "mvn -v"
}