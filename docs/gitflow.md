# Versionamento

Crie cada feature a partir de develop atualizado. Abra o PR para develop, solicite revisão e preserve os commits com **Create a merge commit**.

Quando todas as funcionalidades estiverem integradas, crie `release/sprint4` a partir de develop. Integre a release em main e marque a versão com a tag `sprint4-v1.0.0`. Leve os ajustes feitos durante a release de volta para develop. Use `hotfix/*` a partir de main apenas se for preciso corrigir uma versão já entregue.

Confira a participação no branch final com `git shortlog -sne --no-merges main`.
