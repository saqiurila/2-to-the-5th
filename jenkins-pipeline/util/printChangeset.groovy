// cerner_2^5_2018

def call() {
  def changeLogSets = currentBuild.changeSets
  def commitMessages = ""

  for (int i = 0; i < changeLogSets.size(); i++) {
    def entries = changeLogSets[i].items
    for (int j = 0; j < entries.length; j++) {
      commitMessages += " - ${entries[j].msg} [${entries[j].author}]\n"
    }
  }

  if (!commitMessages) {
    commitMessages = " - No new changes\n"
  }

  echo "Changes:\n------------------------------------------------------------\n" + 
 		  commitMessages + "------------------------------------------------------------"
}