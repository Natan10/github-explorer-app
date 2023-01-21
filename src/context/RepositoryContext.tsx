import { createContext, ReactNode, useContext, useState } from 'react';

import { Github } from '../interfaces/github';

interface RepositoryContextProps {
  repositories: Github[];
  handleAddRepository: (repository: Github) => void;
}

const RepositoryContext = createContext<RepositoryContextProps>({} as RepositoryContextProps);

interface RepositoryContextProviderProps {
  children: ReactNode;
}

export const RepositoryContextProvider = ({
  children
}: RepositoryContextProviderProps) => {
  const [repositories, setRepositories] = useState<Github[]>([]);

  const handleAddRepository = (repository: Github) => {
    if(!repositories.find(rep => rep.id === repository.id)){
      setRepositories(old => [...old, repository]);
    }
  }
  return (
    <RepositoryContext.Provider value={{repositories, handleAddRepository}}>
      {children}
    </RepositoryContext.Provider>
  )
}

export const useRepository = () => {
  return useContext(RepositoryContext);
}