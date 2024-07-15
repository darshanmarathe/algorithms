# Custom Git aliases for Git commands
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias gco='git checkout'

# Alias to stage and commit all changes with a message
alias gac='git add . && git commit -m'

# Function to check out a pull request by number
function checkout_pr() {
  git fetch origin pull/$1/head:pr-$1
  git checkout pr-$1
}
